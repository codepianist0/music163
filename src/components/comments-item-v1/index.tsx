import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { CommentWrapper } from "./style"
import { getFormatDate, setGetImgSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
  commentInfo: any
}

const CommentsItem: FC<IProps> = (props) => {
  const { commentInfo } = props
  return (
    <CommentWrapper $isLiked={commentInfo.liked}>
      <div className="img">
        <img src={setGetImgSize(commentInfo.user.avatarUrl, 50)} alt="" />
      </div>
      <div className="info">
        <div className="top">
          <span className="name">{commentInfo.user.nickname}</span>
          {commentInfo.user?.vipRights?.associator && (
            <img src={commentInfo.user?.vipRights?.associator?.iconUrl} alt="" />
          )}
          <span className="review">: {commentInfo.content}</span>
        </div>
        <div className="bottom">
          <div className="left">{getFormatDate(commentInfo.time, "YYYY年MM月DD日")}</div>
          <div className="right">
            <div className="like">
              <i className="sprite_icon_03 icon"></i>
              <span>({commentInfo.likedCount})</span>
            </div>
            <span className="slice">|</span>
            <div className="return">回复</div>
          </div>
        </div>
      </div>
    </CommentWrapper>
  )
}

export default memo(CommentsItem)
