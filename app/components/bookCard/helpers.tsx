export const formatRatingsCount = (count: number): string => {
    if (count === 1) {
      return count.toString() + " review";
    }
    if (count > 1) {
      return count.toString() + " reviews";
    }
    if (count < 1000) {
      return count.toString();
    } else if (count < 1000000) {
      return Math.round(count / 1000).toString() + "K" + " reviews";
    } else {
      return Math.round(count / 1000000).toString() + "M" + " reviews";
    }
  };

  export const formatAuthorsNames = (names: string | string[]) => {
    if (typeof names === "string") {
      if (names.includes(",")) {
        return names.split(",").join(", ");
      }
      return names;
    } else if (Array.isArray(names)) {
      return names.join(", ");
    } else {
      return "Author unknown";
    }
  };

  