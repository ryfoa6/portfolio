import './Contact.css'

const Contact = () => (
	<footer id='contact'>
		<h3 class='role text-center'>Developer</h3>
		<h3 class='name text-center m-1'>Ryan Foley</h3>
		<div class='socials d-flex justify-content-center'>
			<a href='https://github.com/ryfoa6' rel='noreferrer' target='_blank'>
				<ion-icon name='logo-github' class='m-1'></ion-icon>
			</a>
			<a
				href='https://www.linkedin.com/in/ryfoa6'
				rel='noreferrer'
				target='_blank'>
				<ion-icon name='logo-linkedin' class='m-1'></ion-icon>
			</a>
			<a href='mailto:ryfo720@gmail.com'>
				<ion-icon name='mail' class='m-1'></ion-icon>
			</a>
		</div>
	</footer>
)

export default Contact
