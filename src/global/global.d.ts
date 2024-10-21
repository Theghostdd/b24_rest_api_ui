declare const BX24: {
    callMethod: (method: string, params: any, callback: (res: any) => any) => any;
    fitWindow(data: any): void;
    getScrollSize(): { scrollWidth: number; scrollHeight: number };
    resizeWindow(width: number, height: number): void;
};
