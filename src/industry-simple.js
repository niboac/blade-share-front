
const industry = [
  {
    value: 'A',
    label: '农、林、牧、渔业',
    children: [
      {
        value: '01',
        label: '农业',
        children: [
          {
            value: '011',
            label: '谷物种植',
            children: [
              {
                value: '0111',
                label: '稻谷种植',

              },
              {
                value: '0112',
                label: '小麦种植',

              },
              {
                value: '0113',
                label: '玉米种植',

              },
              {
                value: '0119',
                label: '其他谷物种植',

              }
            ]
          },
          {
            value: '012',
            label: '豆类、油料和薯类种植',
            children: [
              {
                value: '0121',
                label: '豆类种植',

              },
              {
                value: '0122',
                label: '油料种植',

              },
              {
                value: '0123',
                label: '薯类种植',

              }
            ]
          },
          {
            value: '013',
            label: '棉、麻、糖、烟草种植',
            children: [
              {
                value: '0131',
                label: '棉花种植',

              },
              {
                value: '0132',
                label: '麻类种植',

              },
              {
                value: '0133',
                label: '糖料种植',

              },
              {
                value: '0134',
                label: '烟草种植',

              }
            ]
          },
          {
            value: '014',
            label: '蔬菜、食用菌及园艺作物种植',
            children: [
              {
                value: '0141',
                label: '蔬菜种植',

              },
              {
                value: '0142',
                label: '食用菌种植',

              },
              {
                value: '0143',
                label: '花卉种植',

              },
              {
                value: '0149',
                label: '其他园艺作物种植',

              }
            ]
          },
          {
            value: '015',
            label: '水果种植',
            children: [
              {
                value: '0151',
                label: '仁果类和核果类水果种植',

              },
              {
                value: '0152',
                label: '葡萄种植',

              },
              {
                value: '0153',
                label: '柑橘类种植',

              },
              {
                value: '0154',
                label: '香蕉等亚热带水果种植',

              },
              {
                value: '0159',
                label: '其他水果种植',

              }
            ]
          },
          {
            value: '016',
            label: '坚果、含油果、香料和饮料作物种植',
            children: [
              {
                value: '0161',
                label: '坚果种植',

              },
              {
                value: '0162',
                label: '含油果种植',

              },
              {
                value: '0163',
                label: '香料作物种植',

              },
              {
                value: '0169',
                label: '茶及其他饮料作物种植',

              }
            ]
          },
          {
            value: '017',
            label: '中药材种植',
            children: [
              {
                value: '0170',
                label: '中药材种植',

              }
            ]
          },
          {
            value: '019',
            label: '其他农业',
            children: [
              {
                value: '0190',
                label: '其他农业',

              }
            ]
          }
        ]
      },
      {
        value: '02',
        label: '林业',
        children: [
          {
            value: '021',
            label: '林木育种和育苗',
            children: [
              {
                value: '0211',
                label: '林木育种',

              },
              {
                value: '0212',
                label: '林木育苗',

              }
            ]
          },
          {
            value: '022',
            label: '造林和更新',
            children: [
              {
                value: '0220',
                label: '造林和更新',

              }
            ]
          },
          {
            value: '023',
            label: '森林经营和管护',
            children: [
              {
                value: '0230',
                label: '森林经营和管护',

              }
            ]
          },
          {
            value: '024',
            label: '木材和竹材采运',
            children: [
              {
                value: '0241',
                label: '木材采运',

              },
              {
                value: '0242',
                label: '竹材采运',

              }
            ]
          },
          {
            value: '025',
            label: '林产品采集',
            children: [
              {
                value: '0251',
                label: '木竹材林产品采集',

              },
              {
                value: '0252',
                label: '非木竹材林产品采集',

              }
            ]
          }
        ]
      },
      {
        value: '03',
        label: '畜牧业',
        children: [
          {
            value: '031',
            label: '牲畜饲养',
            children: [
              {
                value: '0311',
                label: '牛的饲养',

              },
              {
                value: '0312',
                label: '马的饲养',

              },
              {
                value: '0313',
                label: '猪的饲养',

              },
              {
                value: '0314',
                label: '羊的饲养',

              },
              {
                value: '0315',
                label: '骆驼饲养',

              },
              {
                value: '0319',
                label: '其他牲畜饲养',

              }
            ]
          },
          {
            value: '032',
            label: '家禽饲养',
            children: [
              {
                value: '0321',
                label: '鸡的饲养',

              },
              {
                value: '0322',
                label: '鸭的饲养',

              },
              {
                value: '0323',
                label: '鹅的饲养',

              },
              {
                value: '0329',
                label: '其他家禽饲养',

              }
            ]
          },
          {
            value: '033',
            label: '狩猎和捕捉动物',
            children: [
              {
                value: '0330',
                label: '狩猎和捕捉动物',

              }
            ]
          },
          {
            value: '039',
            label: '其他畜牧业',
            children: [
              {
                value: '0390',
                label: '其他畜牧业',

              }
            ]
          }
        ]
      },
      {
        value: '04',
        label: '渔业',
        children: [
          {
            value: '041',
            label: '水产养殖',
            children: [
              {
                value: '0411',
                label: '海水养殖',

              },
              {
                value: '0412',
                label: '内陆养殖',

              }
            ]
          },
          {
            value: '042',
            label: '水产捕捞',
            children: [
              {
                value: '0421',
                label: '海水捕捞',

              },
              {
                value: '0422',
                label: '内陆捕捞',

              }
            ]
          }
        ]
      },
      {
        value: '05',
        label: '农、林、牧、渔服务业',
        children: [
          {
            value: '051',
            label: '农业服务业',
            children: [
              {
                value: '0511',
                label: '农业机械服务',

              },
              {
                value: '0512',
                label: '灌溉服务',

              },
              {
                value: '0513',
                label: '农产品初加工服务',

              },
              {
                value: '0519',
                label: '其他农业服务',

              }
            ]
          },
          {
            value: '052',
            label: '林业服务业',
            children: [
              {
                value: '0521',
                label: '林业有害生物防治服务',

              },
              {
                value: '0522',
                label: '森林防火服务',

              },
              {
                value: '0523',
                label: '林产品初级加工服务',

              },
              {
                value: '0529',
                label: '其他林业服务',

              }
            ]
          },
          {
            value: '053',
            label: '畜牧服务业',
            children: [
              {
                value: '0530',
                label: '畜牧服务业',

              }
            ]
          },
          {
            value: '054',
            label: '渔业服务业',
            children: [
              {
                value: '0540',
                label: '渔业服务业',

              }
            ]
          }
        ]
      }
    ]
  }
];

export default industry;