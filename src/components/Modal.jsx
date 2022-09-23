import { Component } from "react";
import { createPortal } from "react-dom"

const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {

    render() {
        return createPortal(
            <div class="overlay">
                <div class="modal">
                    {/* <img src="" alt="" /> */}
                    {children}
                </div>
            </div>,
        modalRoot)
    }  
}