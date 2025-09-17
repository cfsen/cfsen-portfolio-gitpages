import type { JSX } from "react";

export type navigationProps = {
	activePage: number;
	handleActive: (page: number) => void;
};
export type Content = {
	key: ContentKey;
	label: string;
	icon: JSX.Element;
};
export enum ContentKey {
	Projects,
	Contact,
	About,
};
