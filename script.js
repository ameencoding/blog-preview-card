"use strict";

import { months } from "./months.js";

const date = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();

const label = document.querySelector(".date");

// Uploaded 5 days ago.
label.textContent = `Published ${date - 5} ${months[month]} ${year}`;
