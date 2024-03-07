const ButtonTypes = ['default', 'primary', 'dashed', 'link', 'text'] as const;
export type ButtonType = typeof ButtonTypes[number];

export type SizeType = 'small' | 'middle' | 'large' | undefined;