import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { RadioAllWrapper } from "./style"
import SeactionHeaderV3 from "@/components/seaction-header-v3"
import { AppShallowEqual, useAppSelector } from "@/store"
import SectionRecommendItem from "./c-cpns/section-recommend-item"
import SectionRankItem from "./c-cpns/section-rank-item"
import SeactionMore from "./c-cpns/section-more"

interface IProps {
  children?: ReactNode
}
const RradioAll: FC<IProps> = () => {
  const {
    recommendProfram,
    toplistProgram,
    musicdjRadios,
    liveDjRadios,
    emotionDjRadios,
    coverSongDjRadios,
    knowledgeDjRadios,
  } = useAppSelector(
    (state) => ({
      recommendProfram: state.djradio.recommendProgram,
      toplistProgram: state.djradio.toplistProgram,
      musicdjRadios: state.djradio.musicDjRadios,
      liveDjRadios: state.djradio.liveDjRadios,
      emotionDjRadios: state.djradio.emotionDjRadios,
      coverSongDjRadios: state.djradio.coverSongDjRadios,
      knowledgeDjRadios: state.djradio.knowledgeDjRadios,
    }),
    AppShallowEqual,
  )

  return (
    <RadioAllWrapper>
      <div className="top">
        <div className="t-item recommend">
          <SeactionHeaderV3 title="推荐节目" isMore />
          <div className="r-list">
            {recommendProfram.map((item) => (
              <div className="item" key={item.id}>
                <SectionRecommendItem info={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="t-item rank">
          <SeactionHeaderV3 title="节目排行榜" isMore />
          <div className="r-list">
            {toplistProgram.map((item, index) => (
              <div className="item" key={item.program.id}>
                <SectionRankItem info={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <SeactionMore title="音乐播客" seactionInfo={musicdjRadios} />
      <SeactionMore title="生活" seactionInfo={liveDjRadios} />
      <SeactionMore title="情感" seactionInfo={emotionDjRadios} />
      <SeactionMore title="创作翻唱" seactionInfo={coverSongDjRadios} />
      <SeactionMore title="知识" seactionInfo={knowledgeDjRadios} />
    </RadioAllWrapper>
  )
}

export default memo(RradioAll)
