import React, { memo, useCallback } from "react"
import type { FC, ReactNode } from "react"
import { CommentsWrapper } from "./style"
import { AppShallowEqual, useAppDispatch, useAppSelector } from "@/store"
import { ConfigProvider } from "antd"
import TextArea from "antd/es/input/TextArea"
import HeaderV1 from "@/components/seaction-header-v3"
import HeaderV2 from "@/components/seaction-header-v2"
import CommentsItemV1 from "@/components/comments-item-v1"
import Pagination from "@/components/pagination"
import { fetchCommentAction } from "../../store"
import { useSearchParams } from "react-router-dom"

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
      <div className="publication">
        <div className="top">
          <div className="img">
            <img src={require("@/assets/img/default_avatar.jpg")} alt="" />
          </div>
          <div className="info">{myTextArea}</div>
        </div>
        <div className="bottom">
          <div className="control">
            <div className="left">
              <i className="sprite_icon_02 icon expression"></i>
              <i className="sprite_icon_02 icon link"></i>
            </div>
            <div className="right">
              <div className="sprite_bottom submit">评论</div>
            </div>
          </div>
        </div>
      </div>
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
        <div className="pagination">
          <Pagination totals={total} onChange={changePageHandle} />
        </div>
      </div>
    </CommentsWrapper>
  )
}

const myTextArea = (
  <ConfigProvider
    theme={{
      components: {
        Input: {
          activeBorderColor: "#C20C0C",
          hoverBorderColor: "#C20C0C",
        },
      },
    }}
  >
    <TextArea showCount maxLength={140} placeholder="评论" style={{ resize: "none" }} />
  </ConfigProvider>
)

export default memo(Comments)
