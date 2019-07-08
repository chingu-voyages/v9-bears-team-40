import * as React from "react";
import styled from "../utils/theme";
import SearchBar from "./SearchBar";
import Modal from "./Modal/Modal";
import SignupPage from "../Pages/SignupPage";

//Prop types
type HeaderProps = {
  IsLoggedIn?: boolean;
};

type HeaderStates = {
  isModalOpen?: boolean;
};

//Example styled component
const Wrapper = styled.header`
  align-items: center;
  background-color: ${props => props.theme.colors.fg};
  box-sizing: border-box;
  display: flex;
  flex-grow: 0;
  justify-content: space-between;
  line-height: 1.5rem;
  min-height: 4.5rem;
  padding: 1.5rem;
  * {
    margin: 0;
  }
`;

class Header extends React.Component<HeaderProps, HeaderStates> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  toggleModal() {
    this.setState(state => ({
      ...state,
      isModalOpen: !state.isModalOpen
    }));
  }

  render() {
    return (
      <Wrapper>
        <h1>Chapterly</h1>
        <SearchBar />
        {this.props.IsLoggedIn ? (
          <button onClick={() => this.toggleModal()}> Sign out</button>
        ) : (
          <button onClick={() => this.toggleModal()}> Sign In</button>
        )}
        {this.state.isModalOpen && (
          <Modal>
            <SignupPage toggleModal={() => this.toggleModal()} />
          </Modal>
        )}
      </Wrapper>
    );
  }
}

export default Header;
