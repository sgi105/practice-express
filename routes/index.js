var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/test", (req, res, next) => {
  console.log(req.body);

  const outputs = [
    {
      basicCard: {
        title: "보물상자",
        description: "보물상자 안에는 뭐가 있을까",
        thumbnail: {
          imageUrl: "",
        },
        profile: {
          imageUrl: "",
          nickname: "보물상자",
        },
        social: {
          like: 1238,
          comment: 8,
          share: 780,
        },
        buttons: [
          {
            action: "message",
            label: "열어보기",
            messageText: "열어보기",
          },
          {
            action: "webLink",
            label: "구경하기",
            webLinkUrl: "https://e.kakao.com/t/hello-ryan",
          },
        ],
      },
    },
  ];

  const response = {
    version: "2.0",
    template: {
      outputs: outputs,
      quickReplies: [],
    },
  };

  return res.json(response);
});

module.exports = router;
