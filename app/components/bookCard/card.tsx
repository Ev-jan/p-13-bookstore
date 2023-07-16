import { IBook, ICartItem } from "@/app/interfaces";
import RatingStars from "./ratingStars";
import { formatRatingsCount, formatAuthorsNames } from "./helpers";
import { ImageWrapper, StyledCartCard, BuyButton, StyledCard, BookDataContainer, Author, Title, RatingBar, ReviewCount, Description, Price, ButtonContainer } from "./style";
import { useAppSelector, useAppDispatch, selectCartIds, selectIsAuthenticated } from "@/app/redux/hooks";
import { itemAdded, itemRemoved } from "../../redux/features/cart/cartSlice";
import Image from "next/image";
import coverPlaceholder from "public/coverPlaceholder.png"

type CardProps = {
  book: IBook;
  variant?: "main" | "cart";
};

const Card: React.FC<CardProps> = ({ book, variant = "main" }) => {
  const { id, authors, title, averageRating, ratingsCount, description, amount, thumbnail, coverMedium, currencyCode } = book;
  const cartItem: ICartItem = {
    id: id,
    quantity: 1,
    price: amount,
    product: book,
  };
  const cartIds = useAppSelector(selectCartIds);
  const isItemInCart = cartIds.includes(cartItem.id);
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const handleButtonClick = () => {
    isItemInCart ? dispatch(itemRemoved(cartItem.id)) : dispatch(itemAdded(cartItem));
  };

  return (
    <>
      {variant === "main" && (
        <StyledCard>
          <ImageWrapper>
            <Image src={coverMedium || coverPlaceholder}
              alt="front cover"
              sizes="100vw"
              fill
              style={{
                objectFit: "cover",
                boxShadow: "0px 24px 36px 0px #35315447",

              }}/>
          </ImageWrapper>
          <BookDataContainer>
            <Author>{formatAuthorsNames(authors)}</Author>
            <Title>{title}</Title>
            {averageRating && ratingsCount && (
              <RatingBar>
                <RatingStars rating={averageRating} />
                <ReviewCount>{formatRatingsCount(ratingsCount)}</ReviewCount>
              </RatingBar>
            )}
            <Description>{description}</Description>
            {amount && currencyCode && <Price>{currencyCode} {amount}</Price>}
            <ButtonContainer>
              <BuyButton 
              $isBookInCart={isItemInCart} 
              onClick={handleButtonClick}
              disabled={!isAuthenticated}
              title={isAuthenticated ? '' : "please log in to add books to cart"}
              >
                {isItemInCart ? "in cart" : "buy now"}
              </BuyButton>
            </ButtonContainer>
          </BookDataContainer>
        </StyledCard>
      )}
      {variant === "cart" && (
        <StyledCartCard>
          <Image src={thumbnail} alt="front cover" height={158} width={102} />
          <BookDataContainer>
            <Author>{formatAuthorsNames(authors)}</Author>
            <Title>{title}</Title>
            {averageRating && ratingsCount && (
              <RatingBar>
                <RatingStars rating={averageRating} />
                <ReviewCount>{formatRatingsCount(ratingsCount)}</ReviewCount>
              </RatingBar>
            )}
          </BookDataContainer>
        </StyledCartCard>
      )}
    </>
  );
};

export default Card;
