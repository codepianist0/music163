import styled from "styled-components"

interface IBarcontrol {
  $isLock: boolean
  $isPlay?: boolean
  $playType?: number
}

export const PlayerWrapper = styled.div<IBarcontrol>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  &:hover {
    .player-wrapper {
      transform: translateY(0);
    }
  }

  .content {
    height: 20px;
    .lock-bar {
      position: absolute;
      top: 0;
      right: 15px;
      width: 52px;
      height: 20px;
      background-position: 0 -380px;
      .lock {
        position: absolute;
        left: 50%;
        top: 5px;
        transform: translateX(-50%);
        display: block;
        width: 18px;
        height: 18px;
        background-position: ${(props) =>
          props.$isLock ? lockPosition.lock.default : lockPosition.unlock.default};
        cursor: pointer;
        &:hover {
          background-position: ${(props) =>
            props.$isLock ? lockPosition.lock.hover : lockPosition.unlock.hover};
        }
      }
    }
  }
  .player-wrapper {
    display: flex;
    height: 47px;
    transform: translateY(${(props) => (props.$isLock ? "0" : "47px")});
    background-repeat: repeat;
    background-position: 0 -6px;
    transition: transform 0.4s ease;
  }
`

export const PlayerControlWrapper = styled.div<IBarcontrol>`
  ${(props) => props.theme.mixin.wrapv4}
  display: flex;
  align-items: center;

  .left {
    display: flex;
    align-items: center;
    margin-right: 35px;
    .icon {
      display: block;
      width: 28px;
      height: 28px;
      cursor: pointer;
    }
    .prev {
      background-position: 0px -130px;
      &:hover {
        background-position: -30px -130px;
      }
    }
    .play {
      margin: 0 8px;
      width: 36px;
      height: 36px;
      background-position: ${(props) =>
        props.$isPlay ? playPosition.play.default : playPosition.pause.default};
      &:hover {
        background-position: ${(props) =>
          props.$isPlay ? playPosition.play.hover : playPosition.pause.hover};
      }
    }
    .next {
      background-position: -80px -130px;
      &:hover {
        background-position: -110px -130px;
      }
    }
  }
  .center {
    display: flex;
    align-items: center;
    font-size: 12px;

    .img {
      position: relative;
      margin-right: 15px;
      width: 34px;
      height: 35px;
      img {
        width: 34px;
        height: 34px;
      }
      .cover {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        background-position: 0px -80px;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 580px;
      .top {
        position: relative;
        z-index: 1;
        top: 8px;
        display: flex;
        align-items: center;
        height: 28px;
        a {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        .name {
          color: #e8e8e8;
        }
        .play-mv {
          display: inline-block;
          margin: 0 15px 0 5px;
          width: 19px;
          height: 17px;
          background-position: 0 -57px;
          cursor: pointer;
          &:hover {
            background-position: -20px -57px;
          }
        }
        .author {
          margin-right: 5px;
          color: #9b9b9b;
        }
        .from-menu {
          display: inline-block;
          margin-left: 13px;
          width: 14px;
          height: 15px;
          cursor: pointer;
          background-position: -110px -103px;
          &:hover {
            background-position: -130px -103px;
          }
        }
      }
      .bottom {
        position: relative;
        top: -8px;
        display: flex;
        align-items: center;
        .ant-slider {
          margin-left: 0;
          margin-right: 0;
          width: 466px;
          .ant-slider-track {
            height: 9px;
            background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
          }
          .ant-slider-rail {
            height: 9px;
            background: url(${require("@/assets/img/progress_bar.png")}) right 0;
          }
          .ant-slider-handle {
            width: 22px;
            height: 24px;
            border: none;
            margin-top: -4px;
            background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
            &::after,
            &::before {
              display: none;
            }
          }
        }
        .time {
          margin-left: 10px;
          .current {
            color: #a1a1a1;
          }
          .slice {
            margin: 0 5px;
            color: #797979;
          }
          .total {
            color: #797979;
          }
        }
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      margin-right: 2px;
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    .r-left {
      display: flex;
      align-items: center;
      .in-drow {
        background: url(${require("@/assets/img/sprite_draw.png")}) no-repeat 0 0;
        &:hover {
          background-position-y: -25px;
        }
      }
      .favor {
        background-position: -88px -163px;
        &:hover {
          background-position: -88px -189px;
        }
      }
      .share {
        background-position: -114px -163px;
        &:hover {
          background-position: -114px -189px;
        }
      }
    }
    .slice {
      width: 13px;
      height: 25px;
      background-position: -142px -247px;
    }
    .r-right {
      display: flex;
      align-items: center;
      .loudness {
        position: relative;
        background-position: -2px -248px;
        &:hover {
          background-position: -31px -248px;
        }
      }
      .play-mode {
        background-position: ${(props) => {
          switch (props.$playType) {
            case 0:
              return palyTypePosition.cycle.default
            case 1:
              return palyTypePosition.random.default
            case 2:
              return palyTypePosition.single.default
          }
        }};
        &:hover {
          background-position: ${(props) => {
            switch (props.$playType) {
              case 0:
                return palyTypePosition.cycle.hover
              case 1:
                return palyTypePosition.random.hover
              case 2:
                return palyTypePosition.single.hover
            }
          }};
        }
      }
      .singer-menu {
        position: relative;
        padding-left: 21px;
        width: 38px;
        height: 25px;
        background-position: -42px -68px;
        text-align: center;
        cursor: pointer;
        span {
          display: block;
          width: 100%;
          line-height: 25px;
          font-size: 12px;
          color: #666;
        }
        &:hover {
          background-position: -42px -98px;
        }
      }
    }
  }
`
const lockPosition = {
  unlock: {
    default: "-80px -380px",
    hover: "-80px -400px",
  },
  lock: {
    default: "-100px -380px",
    hover: "-100px -400px",
  },
}
const playPosition = {
  play: {
    default: "0 -165px",
    hover: "-40px -165px",
  },
  pause: {
    default: "0 -204px",
    hover: "-40px -204px",
  },
}

const palyTypePosition = {
  cycle: {
    default: "-33px -344px",
    hover: "-33px -344px",
  },
  random: {
    default: "-66px -248px",
    hover: "-93px -248px",
  },
  single: {
    default: "-66px -344px",
    hover: "-93px -344px",
  },
}
