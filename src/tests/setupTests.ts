import { expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

beforeAll(() => {
	return;
});

afterEach(() => {
	cleanup();
});

afterAll(() => {
	return;
});
