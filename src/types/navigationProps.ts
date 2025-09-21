import type { JSX } from "react";

export type navigationProps = {
	displayContent: ContentKey;
	displaySubContent: SubContentKey;
	handleContentChange: (content: ContentKey) => void;
	handleSubContentChange: (subContent: SubContentKey) => void;
};
export type Content = {
	key: ContentKey;
	label: string;
	icon: JSX.Element;
	file: string;
};
export type SubContent = {
	key: SubContentKey;
	label: string;
	parentContent: ContentKey;
	file: string;
};
export enum ContentKey {
	Projects,
	Contact,
	About,
};
export enum SubContentKey {
	None,
	vimages,
	BoneUtils,
};
