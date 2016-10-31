

export const KEY_CODES = {
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,
    SHIFT: 16
}

export interface KeyActions {
    [keyCode: number]: KeyAction;
}

export interface KeyAction {
    down?: () => void; // function to call when key is pressed
    up?: () => void; // function to call when key is released
}

export function paramString(name: string, defaultValue: string): string {
    const queryMatch = document.location.href.match(new RegExp(name+"=([^&]+)"))
    if (queryMatch) {
        return (queryMatch[1])
    } else {
        return ((localStorage.getItem(name))) || defaultValue
    }
}

export function paramInt(name: string, defaultValue: number): number {
    return parseInt(paramString(name, defaultValue+""))
}

export function paramFloat(name: string, defaultValue: number): number {
    return parseFloat(paramString(name, defaultValue+""))
}