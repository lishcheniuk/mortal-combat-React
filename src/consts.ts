export interface ICharacter {
    id: number
    img: string
    imgFull: string
}

export interface IVersusCode {
    id: number
    slug: string
    position: string
}

export const characters: ICharacter[] = [
    { id: 1, img: 'character1.jpg', imgFull: 'mkt-character15.png' },
    { id: 2, img: 'character2.jpg', imgFull: 'mkt-character05.png' },
    { id: 3, img: 'character3.jpg', imgFull: 'mkt-character29.png' },
    { id: 4, img: 'character4.jpg', imgFull: 'mkt-character20.png' },
    { id: 5, img: 'character5.jpg', imgFull: 'mkt-character25.png' },
    { id: 6, img: 'character6.jpg', imgFull: 'mkt-character28.png' },
    { id: 7, img: 'character7.jpg', imgFull: 'mkt-character19.png' },
    { id: 8, img: 'character8.jpg', imgFull: 'mkt-character03.png' },
    { id: 9, img: 'character9.jpg', imgFull: 'mkt-character23.png' },
    { id: 10, img: 'character10.jpg', imgFull: 'mkt-character32.png' },
    { id: 11, img: 'character11.jpg', imgFull: 'mkt-character22.png' },
    { id: 12, img: 'character12.jpg', imgFull: 'raiden.png' },
]

export const varsusCodesIcons: IVersusCode[] = [
    { id: 1, slug: 'icon1', position: '-474px -155px' },
    { id: 2, slug: 'icon2', position: '-554px -155px' },
    { id: 3, slug: 'icon3', position: '-632px -155px' },
    { id: 4, slug: 'icon4', position: '-395px -155px' },
    { id: 5, slug: 'icon5', position: '-395px -75px' },
    { id: 6, slug: 'icon6', position: '-77px -75px' }
]