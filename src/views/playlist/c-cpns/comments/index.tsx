import React, { memo, useCallback } from "react"
import type { FC, ReactNode } from "react"
import { CommentsWrapper } from "./style"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import HeaderV1 from "@/components/seaction-header-v3"
import HeaderV2 from "@/components/seaction-header-v2"
import CommentsItemV1 from "@/components/comments-item-v1"
import Pagination from "@/components/pagination"
import { fetchCommentAction } from "../../store"
import { useSearchParams } from "react-router-dom"
import SeactionPublication from "@/components/seaction-publication"

interface IProps {
  children?: ReactNode
}

const Comments: FC<IProps> = () => {
  // 获取id
  const [searchParams] = useSearchParams()
  const { id } = Object.fromEntries(searchParams)
  const dispatch = useAppDispatch()
  const { total, hotCommentsInfo, newCommentsInfo } = useAppSelector(
    (state) => ({
      total: state.playlist.total,
      hotCommentsInfo: state.playlist.hotCommentsInfo,
      newCommentsInfo: state.playlist.newCommentsInfo,
    }),
    AppShallowEqual,
  )

  const changePageHandle = useCallback((index: number) => {
    dispatch(
      fetchCommentAction({
        id: Number(id),
        page: index,
      }),
    )
  }, [])

  return (
    <CommentsWrapper>
      <HeaderV1 title="评论" subTitle={`共${total}条评论`} />
      <SeactionPublication />
      {total > 0 && (
        <>
          <div className="hotComments">
            <HeaderV2 title="精彩评论" />
            <div className="content">
              {hotCommentsInfo?.map((item: any) => (
                <CommentsItemV1 commentInfo={item} key={item.commentId} />
              ))}
            </div>
          </div>
          <div className="newComments">
            <HeaderV2 title={`最新评论${total}`} />
            <div className="content">
              {newCommentsInfo?.map((item: any) => (
                <CommentsItemV1 commentInfo={item} key={item.commentId} />
              ))}
            </div>
            {total > 20 && (
              <div className="pagination">
                <Pagination totals={total} onChange={changePageHandle} />
              </div>
            )}
          </div>
        </>
      )}
    </CommentsWrapper>
  )
}

export default memo(Comments)
