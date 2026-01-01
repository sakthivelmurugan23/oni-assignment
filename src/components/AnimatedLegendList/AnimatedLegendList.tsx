import { LegendList, LegendListProps } from "@legendapp/list";
import { ActivityIndicator, FlatList } from "react-native";
import Animated, { AnimatedProps } from "react-native-reanimated";
import RetryComponent, { RetryComponentProps } from "./RetryComponent";

const AnimatedLegendListComp= Animated.createAnimatedComponent<LegendListProps>(LegendList)

type AnimatedLegendListCompProps<T>=AnimatedProps<LegendListProps<T>> & {
  isLoading?: boolean;
  LoadingComponent?: () => React.JSX.Element;
  isError?: boolean;
  ErrorComponent?: () => React.JSX.Element;
  searched?: boolean;
  RetryButtonComponent?: () => React.JSX.Element;
  onRetry?: () => void;
  errorMessage?: string;
  isPaused?: boolean;
  numOfSkeletonLoader?: number;
  SkeletonLoader?: () => React.JSX.Element;
  CustomListEmptyComponent?: () => React.JSX.Element;
  retryComponentProps?: Partial<RetryComponentProps>;
};

export default function AnimatedLegendList<T>(
    {
    isLoading,
    LoadingComponent,
    isError,
    ErrorComponent,
    searched,
    RetryButtonComponent,
    onRetry,
    errorMessage,
    numOfSkeletonLoader,
    SkeletonLoader,
    CustomListEmptyComponent,
    retryComponentProps,
    ...restProps
  }:AnimatedLegendListCompProps<T>){
  if (isLoading) {
    if (LoadingComponent) return <LoadingComponent />;
    if(SkeletonLoader){
    return (
      <FlatList<number>
        data={Array.from({ length: numOfSkeletonLoader || 3 }, (_, i) => i)}
        renderItem={() =>
           <SkeletonLoader />
        }
      />
    );
    }
    return  <ActivityIndicator />
  }

  // error
  if (isError) {
    if (ErrorComponent) return <ErrorComponent />;

    return (
      <RetryComponent
        {...retryComponentProps}
        onRetry={onRetry}
        RetryButtonComponent={RetryButtonComponent}
        errorMessage={errorMessage}
      />
    );
  }

  const ListEmptyComponent = () => (
    <RetryComponent
      onRetry={onRetry}
      RetryButtonComponent={RetryButtonComponent}
      errorMessage={errorMessage || (searched ? "No Results Found" : "No Data Found")}
      description="It looks like there are currently no data to display."
    />
  );
    return(
        <AnimatedLegendListComp 
        ListEmptyComponent={ListEmptyComponent}
        {...restProps}
        />
    )
}