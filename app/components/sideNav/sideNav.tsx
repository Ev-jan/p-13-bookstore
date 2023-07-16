"use client"
import { StyledSideNav, CategoryList, CategoryListItem } from "./style";
import { selectedFilter, resetStartIndex } from "../../redux/features/fiters/filterSlice";
import { selectActiveFilter, selectStartIndex, useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { useGetBooksQuery } from "@/app/redux/api";

type SideNavProps = {
    filters: string[];
}

const SideNav: React.FC<SideNavProps> = ({filters}) => {
const dispatch = useAppDispatch();
const activeFilter = useAppSelector(selectActiveFilter);
const startIndex = useAppSelector(selectStartIndex);
const { isLoading } = useGetBooksQuery({ subject: activeFilter, startIndex: startIndex });

const handleClick = (filter: string) => {
    dispatch(selectedFilter(filter))
    dispatch(resetStartIndex());
}

    return (
        <StyledSideNav>
            <CategoryList>
                {
                    filters.map((filter, index) => (<CategoryListItem $active={filter === activeFilter} key={index}><button disabled={isLoading} onClick={() => handleClick(filter)}>{filter}</button></CategoryListItem>))
                }
            </CategoryList>
        </StyledSideNav>
    )
};

export default SideNav