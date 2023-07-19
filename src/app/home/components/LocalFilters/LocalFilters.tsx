'use client';

import { Dropdown } from '@/components';
import { useDetectSticky, useScrollDownState } from '@/app/home/hooks';
import * as styles from './LocalFilters.css';

// [x] ui 구성(sticky, dropdown 구성)
// [x] 위로 스크롤 할때 필터 숨기기
// [ ] 전체 지역 미 선택시 전체 구군은 disabled 처리
// [ ] 상태 관리 고민하기 (zustand에 의한 전역상태관리 + query param(새로고침 방지?))

const LocalFilters = () => {
  const [ref, isSticky] = useDetectSticky();
  const isScrollDown = useScrollDownState();

  return (
    <>
      <div ref={ref}></div>
      <div className={styles.background({ isSticky, isScrollDown })}>
        <div className={styles.wrapper}>
          <Dropdown className={styles.dropdown}>
            <Dropdown.Button color="darken" size="small" placeholder="전체 지역"></Dropdown.Button>
            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>
          <Dropdown className={styles.dropdown}>
            <Dropdown.Button color="darken" size="small" placeholder="전체 구/군"></Dropdown.Button>
            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default LocalFilters;
