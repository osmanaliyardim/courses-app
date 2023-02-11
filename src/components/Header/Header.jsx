import Logo from './components/Logo/Logo';
import BootstrapButton from 'react-bootstrap/Button';
import Welcome from './components/Welcome/Welcome';

export default function Header() {
	const userName = 'Osman Ali YARDIM';
	const isAuthorized = true;

	return (
		<div className='header'>
			<Logo></Logo>
			<Welcome name={userName}></Welcome>
			<BootstrapButton variant='danger' type='submit'>
				{isAuthorized ? 'Logout' : 'Login'}
			</BootstrapButton>
		</div>
	);
}
