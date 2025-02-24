import * as S from "./styles";

export const Form = () => {
	const dynamicDate = new Date().getFullYear() + 1;

	return (
		<S.FormContainer>
			<S.FormTitle>
				Your Journay to Coding Conf {`${dynamicDate}`} Starts Here!
			</S.FormTitle>
			<S.FormSubTitle>
				Secure your spot at next year's biggest coding conference.
			</S.FormSubTitle>

			<S.Form>
				<S.InputLabel>Upload Avatar</S.InputLabel>
				<S.UploadInputContainer>
					<S.Input type={"file"} />
				</S.UploadInputContainer>
				<S.AvatarRules>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="none"
						viewBox="0 0 16 16"
					>
						<path
							stroke="#D1D0D5"
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
						/>
						<path
							fill="#D1D0D5"
							d="M8.004 10.462V7.596ZM8 5.57v-.042Z"
						/>
						<path
							stroke="#D1D0D5"
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M8.004 10.462V7.596M8 5.569v-.042"
						/>
					</svg>
					Upload your photo (JPG or PNG, max size: 500kb)
				</S.AvatarRules>
				<S.InputLabel>Full Name</S.InputLabel>
				<S.Input type={"text"} />
				<S.InputLabel>Email Address</S.InputLabel>
				<S.Input type={"text"} placeholder={"example@email.com"} />
				<S.InputLabel>GitHub Username</S.InputLabel>
				<S.Input type={"text"} placeholder={"@yourusername"} />
				<S.FormButton>Generate My Ticket</S.FormButton>
			</S.Form>
		</S.FormContainer>
	);
};
