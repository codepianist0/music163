import React, { memo, useCallback } from "react"
import type { FC, ReactNode } from "react"
import { CommentWrapper } from "./style"
import SeactionHeaderV3 from "@/components/seaction-header-v3"
import SeactionPublication from "@/components/seaction-publication"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import SeactionHeaderV2 from "@/components/seaction-header-v2"
import CommentsItemV1 from "@/components/comments-item-v1"
import Pagination from "@/components/pagination"
import { useGetSearchParams } from "@/hooks/useGetSearchParams"
import { fetchCommentInfo } from "../../store"

interface IProps {
  children?: ReactNode
}

const Comment: FC<IProps> = () => {
  const { id } = useGetSearchParams()
  const dispatch = useAppDispatch()
  const { rankingDetail, hotComment, comment } = useAppSelector(
    (state) => ({
      rankingDetail: state.ranking.rankingDetail,
      hotComment: state.ranking.hotComment,
      comment: state.ranking.comment,
    }),
    AppShallowEqual,
  )
  const pageChangeClick = useCallback((index: number) => {
    const limit = 20
    const page = index
    const info = { id: Number(id), limit, page }
    dispatch(fetchCommentInfo(info))
  }, [])
  return (
    <CommentWrapper>
      <SeactionHeaderV3 title="评论" subTitle={`共${rankingDetail.commentCount}条评论`} />
      <SeactionPublication />
      {hotComment.length > 0 && (
        <div className="hot-comment">
          <SeactionHeaderV2 title="精彩评论" />
          {hotComment.map((item) => (
            <CommentsItemV1 key={item.commentId} commentInfo={item} />
          ))}
        </div>
      )}
      <div className="comment">
        <SeactionHeaderV2 title="最新评论" />
        {comment.map((item) => (
          <CommentsItemV1 key={item.commentId} commentInfo={item} />
        ))}
        <Pagination totals={rankingDetail.commentCount} pageSize={20} onChange={pageChangeClick} />
      </div>
    </CommentWrapper>
  )
}

export default memo(Comment)
