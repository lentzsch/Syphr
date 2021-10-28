//NOT IN USE YET

import React from 'react';
import { gsap, TweenLite } from "gsap/dist/gsap";
import { Draggable } from "gsap/dist/Draggable";

gsap.registerPlugin(Draggable);

const PlugCable = () => {
    // var bezierWeight = 0.675;

    // var handles = document.querySelectorAll(".handle");
    // var path = document.querySelector(".path");
    // const [handle]


    TweenLite.set(handles[0], { x: 200, y: 50 });
    TweenLite.set(handles[1], { x: 200, y: 50 });

    Draggable.create(handles, {
        onDrag: updatePath
    });

    updatePath();

    function updatePath() {

        let x1 = handles[0]._gsTransform.x;
        let y1 = handles[0]._gsTransform.y;

        let x4 = handles[1]._gsTransform.x;
        let y4 = handles[1]._gsTransform.y;

        let dx = x4 - x1;

        let x2 = x1 + dx * 0.3;
        let x3 = x4 - dx * 0.3;
        let y2 = y1 + 150;
        let y3 = y4 + 150;

        let data = `M${x1},${y1} C${x2},${y2} ${x3},${y3} ${x4},${y4}`;

        path.setAttribute("d", data);
    }

    return (
        <svg id="svg">
            <path className="path" />
            <circle className="handle" cx="0" cy="0" r="8" />
            <circle className="handle" cx="0" cy="0" r="8" />
        </svg>
    )
}

export default PlugCable;