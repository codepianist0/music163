import React, { memo, useCallback } from "react"
import type { FC, ReactNode } from "react"
import { CommentsWrapper } from "./style"
import SeactionPublication from "@/components/seaction-publication"
import SeactionHeaderV2 from "@/components/seaction-header-v2"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import CommentsItemV1 from "@/components/comments-item-v1"
import Pagination from "@/components/pagination"
import { fetchCommentAction } from "../../store"
import { useSearchParams } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

const Comments: FC<IProps> = () => {
  const [searchParams] = useSearchParams()
  const { id } = Object.fromEntries(searchParams)
  const dispatch = useAppDispatch()
  const { hotComments, comments, total } = useAppSelector(
    (state) => ({
      hotComments: state.song.hotComments,
      comments: state.song.comments,
      total: state.song.total,
    }),
    AppShallowEqual,
  )
  const chengPage = useCallback((page: number) => {
    const offset = (page - 1) * 20
    dispatch(fetchCommentAction({ id, offset }))
  }, [])

  return (
    <CommentsWrapper>
      <SeactionPublication />
      <div className="hot-comments">
        <SeactionHeaderV2 title="精彩评论" />
        <div className="comment-list">
          {hotComments?.map((item) => <CommentsItemV1 key={item.commentId} commentInfo={item} />)}
        </div>
      </div>
      <div className="new-comments">
        <SeactionHeaderV2 title={`最新评论(${total})`} />
        <div className="comment-list">
          {comments.map((item) => (
            <CommentsItemV1 key={item.commentId} commentInfo={item} />
          ))}
        </div>
      </div>
      <Pagination totals={total} pageSize={20} onChange={chengPage} />
    </CommentsWrapper>
  )
}

export default memo(Comments)
