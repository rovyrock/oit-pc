/*
 * 项目名称:oit-data-compliance-web
 * 文件名称:SvgIcon.js
 * Date:2020/8/19 下午2:10
 * Author:shy
 *
 */

import React, { forwardRef, Ref, HTMLAttributes } from 'react';
// import '@/assets/css/pages/svgicon.css';
import classNames from 'classnames';
import { Bubble } from 'tea-component/lib/bubble';
import { Tooltip } from 'tea-component/lib/tooltip';
// import { useConfig } from "../_util/config-context";

// 引入所有的svg的文件

const requireAll = (requireContext: any) => {
  requireContext.keys().map(requireContext);
  // console.log(requireAll)
};
const req: any = (require as any).context('../../assets/svgs', false, /\.svg$/);
requireAll(req);

export interface IconProps extends HTMLAttributes<HTMLElement> {
  /** 图标类型 */
  type: string;
  /**
   * 默认为 16x16 图标
   *
   * 状态图标支持配置为 32x32，包括：`success`、`infowaiting`、`infoblue` 和 `error`
   *
   * @default "default"
   */
  size?: 'default' | 's' | 'l';
  /**
   * 是否渲染为超链接
   * @default false
   */
  link?: boolean;
  /**
   * 在图标上添加 Tooltip 的快捷方式，详见 [Tooltip](/component/tooltip) 组件
   */
  tooltip?: React.ReactNode;
  /**
   * 在图标上添加 Bubble 的快捷方式，详见 [Bubble](/component/bubble) 组件
   */
  bubble?: React.ReactNode;
}
export const Icon = forwardRef((props: IconProps, ref: Ref<HTMLElement>) => {
  // const { classPrefix } = useConfig();
  const { type, size, className, tooltip, bubble, link, ...htmlProps } = props;
  const iconName = `#icon-${type}${size === 'l' ? `-${size}` : ''}`;
  const iconClassName = classNames(
    'svg-icon',
    `svg-icon-${props.type}`,
    // `${classPrefix}-icon`,
    // `${classPrefix}-icon-${type}`,
    className,
    {
      'size-s': size === 's',
      'size-l': size === 'l',
      'svg-icon--large': size === 'l',
    },
  );
  const Parent = link ? 'a' : 'i';
  const icon = (
    <Parent ref={ref as any} className={iconClassName} {...htmlProps}>
      <svg aria-hidden="true">
        <use xlinkHref={iconName} />
      </svg>
    </Parent>
  );

  if (tooltip) {
    return <Tooltip title={tooltip}>{icon}</Tooltip>;
  }
  if (bubble) {
    return <Bubble content={bubble}>{icon}</Bubble>;
  }
  return icon;
});
