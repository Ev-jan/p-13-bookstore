"use client"
import { ContentContainer, SidebarIconToggle, SpinnerHorizontal, SpinnerDiagonal1, SpinnerDiagonal2, SideNavContainer, StyledBookGallery, LoaderContainer, LoadBtnContainer, Input } from "./style"
import SideNav from "../sideNav/sideNav";
import Button from "../button/button";
import Loader from "../loader/loader";
import Card from "../bookCard/card";
import { useGetBooksQuery } from "@/app/redux/api";
import { selectActiveFilter, selectStartIndex, useAppSelector, useAppDispatch, selectAllBooks } from "@/app/redux/hooks";
import { booksAdded, booksReceived } from "@/app/redux/features/books/bookSlice";
import { useEffect, useState } from "react";
import { incrementedStartIndex } from "../../redux/features/fiters/filterSlice"
import { filters } from "@/app/data";


const BookGallery = () => {
    const [isHidden, setIsHidden] = useState(false);
    const dispatch = useAppDispatch()
    const startIndex = useAppSelector(selectStartIndex);
    const activeFilter = useAppSelector(selectActiveFilter);
    const { data, isLoading, refetch } = useGetBooksQuery({ subject: activeFilter, startIndex: startIndex });
    const books = useAppSelector(selectAllBooks);

    const handleInputClick = () => {
        setIsHidden((isHidden) => !isHidden)
    }

    const handleLoadBtnClick = () => {
        dispatch(incrementedStartIndex())
    }

    useEffect(() => {
        refetch();
    }, [startIndex]);

    useEffect(() => {
        if (data) {
          if (startIndex === 0) {
            dispatch(booksReceived(data));
          } else {
            dispatch(booksAdded(data));
          }
        }
      }, [data, startIndex]);


    return (
        <ContentContainer>
            <Input type="checkbox" $checked={isHidden} defaultChecked={isHidden} />
            <SidebarIconToggle htmlFor="openSidebarMenu" onClick={handleInputClick}>
                <SpinnerDiagonal1 $hidden={isHidden} />
                <SpinnerHorizontal $hidden={isHidden} />
                <SpinnerDiagonal2 $hidden={isHidden} />
            </SidebarIconToggle>
            <SideNavContainer $hidden={isHidden}>
                <SideNav filters={filters}/>
            </SideNavContainer>
            {!isLoading ? (<StyledBookGallery>
                {books.map((book) => <Card key={book.id} book={book} />)}
            </StyledBookGallery>) :
                (<LoaderContainer>
                    <Loader />
                </LoaderContainer>)}
            <LoadBtnContainer>
                <Button onClick={handleLoadBtnClick} disabled={isLoading}>{"load more"}</Button>
            </LoadBtnContainer>
        </ContentContainer>
    )

}

export default BookGallery