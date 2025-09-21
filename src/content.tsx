import CodeIcon from '@mui/icons-material/Code';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { ContentKey, SubContentKey, type Content, type SubContent } from "./types/navigationProps";

function populateContent(): Content[] {
	let content: Content[] = [];
	content.push({ key: ContentKey.Projects, label: "Projects", file: "content/Projects.md", icon: <CodeIcon /> });
	content.push({ key: ContentKey.About, label: "About", file: "content/About.md", icon: <FingerprintIcon /> });
	content.push({ key: ContentKey.Contact, label: "Contact", file: "content/Contact.md", icon: <MailOutlineIcon /> });
	return content;
}

function populateSubContent(): SubContent[] {
	let subContent: SubContent[] = [];
	subContent.push({ key: SubContentKey.vimages, label: "vimages", file: "subcontent/vimages.md", parentContent: ContentKey.Projects });
	subContent.push({ key: SubContentKey.BoneUtils, label: "BoneUtils", file: "subcontent/BoneUtils.md", parentContent: ContentKey.Projects });
	return subContent;
}

export const CONTENT = populateContent();
export const SUBCONTENT = populateSubContent();
