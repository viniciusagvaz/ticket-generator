import styled from "styled-components";

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;

	max-width: 360px;
	width: 100%;
	margin: 0 2rem;

	@media (width >= 768px) {
		max-width: 830px;
	}
`;
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;

	max-width: 400px;
	width: 100%;
	margin: 0 auto;
`;

export const FormTitle = styled.h1`
	font-size: clamp(3rem, 0.4167rem + 3.7037vw, 6rem);
	font-weight: 500;
	text-align: center;
	color: #fff;
`;
export const FormSubTitle = styled.h2`
	font-size: 2rem;
	font-weight: 400;
	color: #fff;
	opacity: 0.6;
	text-align: center;
`;
export const AvatarUploadContainer = styled.div``;

export const AvatarUpload = styled.div``;

export const AvatarRules = styled.p`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 1.2rem;
	text-align: center;
`;

export const InputLabel = styled.label`
	font-size: 2rem;
	opacity: 0.9;
`;
export const Input = styled.input`
	background: rgba(255, 255, 255, 0.15);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);

	border-radius: 8px;
	border: 1px solid rgba(255, 255, 255, 0.25);

	font-size: 1.6rem;

	padding: 1rem;

	&[type="file"] {
		width: 100%;
		border: 2px dashed rgba(255, 255, 255, 0.15);
	}
`;

export const UploadInputContainer = styled.span``;

export const FormButton = styled.button`
	background-color: orange;
	border-radius: 8px;
	border: none;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

	font-size: 1.6rem;
	padding: 1rem;
	margin: 1rem 0 0 0;
`;
