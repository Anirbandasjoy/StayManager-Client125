declare module "react-star-ratings" {
  import * as React from "react";

  interface StarRatingsProps {
    rating: number;
    starRatedColor?: string;
    starEmptyColor?: string;
    starHoverColor?: string;
    starDimension?: string;
    starSpacing?: string;
    numberOfStars?: number;
    name?: string;
    changeRating?: (newRating: number, name: string) => void;
  }

  export default class StarRatings extends React.Component<
    StarRatingsProps,
    any
  > {}
}
