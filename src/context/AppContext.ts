import { createContext } from "react";

export interface AppContextData {
	inViewId: string;
}

export interface AppContextType {
	contextData: AppContextData;
	setContextData: React.Dispatch<React.SetStateAction<AppContextData>>;
}

export const AppContext = createContext<AppContextType>({
	contextData: { inViewId: "" },
	setContextData: ()=>{}
});