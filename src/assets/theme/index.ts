const theme = {
  color: {
    primary: "#C20C0C",
    secondary: "#9B0909",
    link: "#0c73c2",
  },
  size: {
    primary: "14px",
    secondary: "12px",
  },
  mixin: {
    wrapv1: `
      width: 1100px;
      margin: 0 auto;
    `,
    wrapv2: `
      width: 982px;
      margin: 0 auto;
      `,
    wrapv3: `
      width: 980px;
      margin: 0 auto;
      `,
    wrapv4: `
      width: 1030px;
      margin: 0 auto;
    `,
    layout1: `> .content {
      display: flex;
      width: 982px;
      margin: 0 auto;
      border: 1px solid #d3d3d3;
      background-image: url(${require("@/assets/img/wrap-bg.png")});
      > .left {
        flex: 1;
        margin-right: 2px;
      }
      > .right {
        width: 252px;
      }
    }`,
    layout2: `> .content {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 980px;
      min-height: 200px;
      background-image: url(${require("@/assets/img/wrap_bg_02.png")});
      > .left {
        flex: 1;
      }
      > .right {
        width: 270px;
      }
    }`,
    layout3: `> .content {
      display: flex;
      justify-content: space-between;
      width: 980px;
      margin: 0 auto;
      min-height: 700px;
      background: url(${require("@/assets/img/wrap_bg_03.png")});
      border: 1px solid #d3d3d3;
      > .left {
        width: 240px;
        box-sizing: border-box;
      }
      > .right {
        width: 740px;
        box-sizing: border-box;
      }
    }`,
  },
}

export default theme
