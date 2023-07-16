"use client"
import Image from "next/image";
import ProfileEditForm from "../components/profileEditForm/profileEditForm";
import UserBioEditForm from "../components/userBioEditForm/userBioEditForm";
import UserCard from "../components/userCard/userCard";
import { Main, ProfileHeading, LeftSection, RightSection } from "./style"
import { selectUserBio, useAppSelector } from "../redux/hooks";
import { useState } from "react";

export default function Profile() {

    const [isEditModeOn, setIsEditModeOn] = useState<boolean>(false)
    const bio = useAppSelector(selectUserBio)
    const handleClick = () => {
        setIsEditModeOn((prevModeState) => !prevModeState)
    }

    return (
        <Main>
            <LeftSection>
                <ProfileHeading>PROFILE</ProfileHeading>
                {!isEditModeOn ? (
                    <UserCard userImage={<Image src={"/../public/profile-pic.png"} alt={"profile picture"} width={235} height={235} />} toggleForm={handleClick}/>
                ) : (
                    <ProfileEditForm userImage={<Image src={"/../public/profile-pic.png"} alt={"profile picture"} width={235} height={235} />} toggleForm={handleClick}/>
                )}
            </LeftSection>
            <RightSection>
                <h3>ABOUT ME</h3>
                {!isEditModeOn ? <p>{bio}</p> : <UserBioEditForm />}
            </RightSection>
        </Main>
    );

}