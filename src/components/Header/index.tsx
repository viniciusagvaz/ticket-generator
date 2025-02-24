import * as S from "./styles";
import logo from "../../assets/images/logo-full.svg";

export const Header = () => {
	return (
		<S.Container>
			<S.LogoContainer>
				<img src={logo} alt={"Coding Conf"} />
			</S.LogoContainer>
		</S.Container>
	);
};
