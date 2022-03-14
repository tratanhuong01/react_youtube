import React, { useRef, useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';

export default function ListTypeVideo() {
    //
    const listType = [
        {
            id: 1,
            name: "Tất cả"
        },
        {
            id: 2,
            name: "Âm nhac"
        },
        {
            id: 3,
            name: "Hài kịch tình huống"
        },
        {
            id: 4,
            name: "Phim hoạt hình"
        },
        {
            id: 5,
            name: "Danh sách kết hợp"
        },
        {
            id: 6,
            name: "Trực tiếp"
        },
        {
            id: 7,
            name: "Bóng đá"
        },
        {
            id: 8,
            name: "Trò chơi"
        },
        {
            id: 9,
            name: "Mới tải lên gần đây"
        },
        {
            id: 10,
            name: "Đã xem"
        },
        {
            id: 11,
            name: "Đề xuất mới"
        }
    ];
    const refScroll = useRef();
    const [active, setActive] = useState(listType[0]);
    const [show, setShow] = useState({ left: false, right: true });
    //
    return (
        <ScrollContainer ref={refScroll} onScroll={() => {
            if (refScroll.current) {
                if (refScroll.current.scrollLeft > 20) {
                    setShow({ ...show, left: true, right: false })
                }
                else {
                    setShow({ ...show, left: false, right: true })
                }
            }
        }} className='w-full max-w-full overflow-auto border-t-2 border-b-2 border-solid border-gray-200 relative'>
            {show.left && <div className='w-12 p-3 cursor-pointer bg-white absolute top-1/2 left-0 transform 
            -translate-y-1/2 flex justify-start items-center'>
                <i className='bx bx-chevron-left text-2xl'></i>
            </div>}
            <ul className='flex gap-2 w-full px-6 py-3'>
                {[...listType].map(item =>
                    <ItemType item={item} key={item.id} active={active} setActive={setActive} />
                )}
            </ul>
            {show.right && <div className='w-12 p-3 cursor-pointer bg-white absolute top-1/2 right-0 transform 
            -translate-y-1/2 flex justify-end items-center'>
                <i className='bx bx-chevron-right text-2xl'></i>
            </div>}
        </ScrollContainer>
    )
}

const ItemType = ({ active, item, setActive }) => {
    //
    //
    return (
        <li onClick={() => setActive(item)} className={`px-3 py-1.5 text-sm flex-shrink-0 cursor-pointer rounded-full 
         ${active.id === item.id ? 'bg-black text-white font-semibold' : 'bg-gray-200'} 
         border border-solid border-gray-300`}>
            {item.name}
        </li >
    )
}
