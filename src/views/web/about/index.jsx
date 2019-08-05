import React, { Component, useEffect, useState } from 'react'
import './index.less'
import AuthorAvatar from '@/components/web/AuthorAvatar'
import { connect } from 'react-redux'
import { generateColorMap } from '@/redux/common/actions'

import { Divider, Rate, Icon } from 'antd'

import Comment from '@/components/web/comment'
import axios from '@/lib/axios'
import api from '@/api/index'

function About(props) {
  const [commentList, setCommentList] = useState([])

  useEffect(() => {
    const fetchList = () => {
      axios.get(api['CommentAbout']).then(res => {
        props.generateColorMap(res.rows) // 生成头像的颜色匹配
        setCommentList(res.rows)
      })
    }
    fetchList()
  }, [])

  return (
    <div className="content-inner-wrapper about">
      wuha
    </div>
  )
}

export default connect(
  null,
  { generateColorMap }
)(About)
