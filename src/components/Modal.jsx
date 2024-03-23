import React from "react";
import styled, { keyframes } from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

// 모달이 열릴 때 애니메이션을 정의합니다.
const slideInRight = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const ModalLayout = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
`;

const ModalContent = styled.div`
    background-color: #ffffff;
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    padding: 15px;

    /* 모달이 열릴 때 애니메이션을 적용 */
    animation: ${slideInRight} 0.3s ease-in-out; /* 애니메이션의 지속 시간을 조절 */
`;

const ModalHeader = styled.div`
    width: 100%;
    height: 7%;
    display: flex;
    align-items: center;
    border: solid 1px;
`;

const ModalContainer = styled.div`
    width: 100%;
    background: rgb(255, 255, 255);
    padding-top: 0px;
    height: 100%;
`;

const BackIcon = styled(IoIosArrowBack)`
    font-size: 30px;
    cursor: pointer; /* 아이콘에 커서를 변경하여 클릭 가능함을 나타냄 */
`;

const Modal = ({ props, onClose }) => {
    const handleIconClick = () => {
        onClose(); // 모달을 닫기 위해 부모 컴포넌트에서 전달한 콜백 함수 호출
    };

    return (
        <ModalLayout>
            <ModalContent>
                <ModalHeader>
                    <BackIcon onClick={handleIconClick} /> {/* 클릭 이벤트 추가 */}
                </ModalHeader>

                <ModalContainer>
                    {props}
                </ModalContainer>

            </ModalContent>
        </ModalLayout>
    )
}

export default Modal;
