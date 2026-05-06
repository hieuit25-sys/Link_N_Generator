const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let links = [
    { id: 1, url: "https://netflix.com/?nftoken=BgjXuOvcAxLCASzxHnpem9xmFyUAbcOd5caRUbsPtrHYuUjY0XgzeUmHtZE4Yx4O4ktXBoRMkAA2Ai0TlsXeHS4u/nUrYMUTJmL3DuqT6iC9isGJoHr5QVz/ma3HS36CFMDf2LPC+oVYJxKrLgP2fo+GELSYDvAjneLz+LCoZHvR37FfyuKSx3yMAT59xVntQW5RVS+l4xzyYj8i5ogToBAkj2gYkk9/zTu8lRG5rnoYnFfnG72HotUObt9NscWE0ZE/8SikuG/yqGbcGAYiDgoMNDrTEiL7evoJlLeW", used: false},
    { id: 2, url: "https://netflix.com/?nftoken=BgjXuOvcAxLCAaObKsNb8tkc3d24XvsKYDP8S7Td4h2beCxY6Q32OtX6LeecLyO5PNIuzMjqqZfau4PELKPmAD6HaKzeHNaGOswGHNRQT1fdxnyrSfX5xSc3Iho4MeJs4s3FSNJ3mp5nc5+yc8SGDEvztcUapObCFe/GZbvAHguBqkHC+pLDE3Nl+ZF+k6BFthd5l2mxdHedVP2kZuFqhLZclEJhYC+vKpwpXBMUS0FcyFrlDChVLLK7w8s3gvlyVYPkJZ6m2AGyzHhzGAYiDgoMVsHJ8xTsPOvt7deL", used: false},
    { id: 3, url: "https://netflix.com/?nftoken=BgjXuOvcAxLCAanCI8/noN394EGwdi/hoQs1sRkkEkpji6qwgbSACi/00JDj0e6BnwubG9BQ5gUJFzIL/j9iZdxoiCjreI8CoGoM6M80s2b18VV2mqadOUqYlrbAijNBDC8Un2OoboL6948eautb++K5gtRTRcVqGaqZB5jBon2iVa6ncosGw2RcmuFdaNDUyONoVE3MemySg9C0U+a7sVauJA8UORdh6CHhF4Hk5KAsS6St0CzfUK2EreCPJIuXafPgC1x6DGKb9raXGAYiDgoMfoR0IJhbkYLyb6QO", used: false}
];

app.get("/get-link", (req, res) => {
   const link = links.find(l => !l.used);
   
   if(!link){
    return res.json({ success: false, message: "Het link" });
   }

   link.used = true;

   res.json({ success: true, url: link.url });
});

app.listen(3000, () => {
    console.log("Backend chay tai http://localhost:3000");
});