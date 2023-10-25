import { ReactNode } from "react";
import Compose from "../../shared/lib/compose";
import { StyleProvider } from "./style";
import { UiKitProvider } from "./ui-kit";

type AppProviderProps = {
    children?: ReactNode;
};

export const AppProvider = (props: AppProviderProps) => {
    const {children} = props;
    return (
        <Compose components={[StyleProvider, UiKitProvider]}>
            {children}
        </Compose>
    )
}