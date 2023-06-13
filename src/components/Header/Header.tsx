import { Logo } from '@/components';
import { serverRequest } from '@/utils/ky/serverRequest';
import { Profile } from '@/types/data';
import { actions } from './Header.css';
import HeaderWrapper from './HeaderWrapper';
import LoginActions from './LoginActions';
import UnloginActions from './UnloginActions';

const fetchProfile = async () => {
	const profile = await serverRequest
		.get('v1/users/profile', {
			credentials: 'include',
		})
		.json<Profile | null>();
	return profile ?? undefined;
};

interface Props {
	// 헤더의 action buttons가 필요한지의 여부
	actionRequired?: boolean;
}

const Header = async ({ actionRequired = true }: Props) => {
	const profile = await fetchProfile();
	return (
		<HeaderWrapper>
			<Logo />
			{actionRequired && (
				<div className={actions}>{profile ? <LoginActions profile={profile} /> : <UnloginActions />}</div>
			)}
		</HeaderWrapper>
	);
};

export default Header;
