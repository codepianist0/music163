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
    layout1: `
    > .content {
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
  },
}

export default theme
