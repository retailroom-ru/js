import { CustomEmbedBubble as CustomEmbedBubbleProps } from '@typebot.io/schemas';
type Props = {
    content: CustomEmbedBubbleProps['content'];
    onTransitionEnd: (offsetTop?: number) => void;
    onCompleted: (reply?: string) => void;
};
export declare const showAnimationDuration = 400;
export declare const CustomEmbedBubble: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=CustomEmbedBubble.d.ts.map