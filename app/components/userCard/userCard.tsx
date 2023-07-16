import Button from "../button/button";
import { StyledUserCard, UserInfoWrapper, Label, CardEntry } from "./style";
import { selectUserEmail, useAppSelector, selectUserName } from "../../redux/hooks";


type UserCardProps = {
    userImage: React.ReactNode;
    toggleForm: () => void
}

const UserCard: React.FC<UserCardProps> = ({userImage, toggleForm}) => {

    const email = useAppSelector(selectUserEmail);
    const name = useAppSelector(selectUserName);

    return (
        <StyledUserCard>
        {userImage}
        <UserInfoWrapper>
            <Label>YOUR NAME</Label>
            <CardEntry>{name}</CardEntry>
            <Label>YOUR EMAIL</Label>
            <CardEntry>{email}</CardEntry>
            <Button onClick={toggleForm}>{"edit profile"}</Button>
        </UserInfoWrapper>
    </StyledUserCard>
    )
}

export default UserCard