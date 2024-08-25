import { render, screen } from '@testing-library/react';
import App from './App';

const FAKE_DATA = [
	{ id: 1, title: 'Cool Sox', image: 'https://image1.com' },
	{ id: 2, title: 'Cool Pants', image: 'https://image2.com' },
	{ id: 3, title: 'Cool Underwear', image: 'https://image3.com' },
];

describe('App', () => {
	it('renders items from the API', async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(FAKE_DATA),
				ok: true,
			})
		);
		render(<App />);

		expect(screen.getByText('Loading...')).toBeInTheDocument();

		expect(await screen.findByText('Cool Sox')).toBeInTheDocument();
	});

	it('shows an error message if the request', async () => {
		global.fetch = jest.fn(() =>
			Promise.reject(new Error('Something went wrong'))
		);

		render(<App />);

		expect(screen.getByText('Loading...')).toBeInTheDocument();

		expect(
			await screen.findByText('OOPS! Looks like something went wrong!')
		).toBeInTheDocument();
	});
});
