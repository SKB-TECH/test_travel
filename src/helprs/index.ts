//
const URL_API = String(process.env.NEXT_PUBLIC_API_URL);
export { URL_API };

export const stockageData = (cle: string, data: []) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(cle, JSON.stringify(data));
    }
};

export const recupereStorage = (cle: string) => {
    let data = "";
    if (typeof window !== "undefined") {
        try {
            const datalocal = localStorage.getItem(cle);
            if (datalocal) {
                data = JSON.parse(datalocal);
            }
        } catch (e) {
            return null;
        }
    }
    return data;
};

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

export const getLike = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
