/**
 * Created by kokdemo on 2016/1/20.
 */
var jianghuInfo = {
    prestige: [
        {num: 0, level: '无名小虾'},
        {num: 10, level: '义气少年'},
        {num: 1000, level: '新进侠客'},
        {num: 100000, level: '一方大侠'},
        {num: 10000000, level: '一代宗师'}
    ],
    martial: [
        {
            name: '嵩山少林寺',
            describe: '后魏孝文帝时期，达摩大师在嵩山面壁9年，终成少林武术，之后这间古刹的风雨，就不为人所知了。',
            force: 1000,
            money: {
                deposit: 10000,
                income: 0
            },
            prestige: 1500,
            levelInfo: [
                {
                    name: '沙弥',
                    force: 5,
                    cost: 15
                },
                {
                    name: '罗汉堂弟子',
                    force: 20,
                    cost: 100
                },
                {
                    name: '般若堂弟子',
                    force: 100,
                    cost: 600
                },
                {
                    name: '达摩院执事',
                    force: 600,
                    cost: 4000
                },
                {
                    name: '戒律院首座',
                    force: 4200,
                    cost: 30000
                },
                {
                    name: '少林寺方丈',
                    force: 8000,
                    cost: 35000
                }
            ],
            kongfu: {
                '沙弥': [
                    {
                        name: '少林长拳',
                        type: 'force',
                        describe: '少林基础入门的拳术，更注重强身健体',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 10,
                        proficiency: 0
                    },
                    {
                        name: '少林佛法',
                        type: 'mind',
                        describe: "'要以佛法化解武功中的戾气'--不愿意留下姓名的高僧慧能这么说道",
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 10,
                        proficiency: 0
                    }
                ],
                '罗汉堂弟子':[
                    {
                        name: '罗汉拳',
                        type: 'force',
                        describe: '少林著名拳法，以大开大合，刚强无匹著称',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 10,
                        proficiency: 0
                    },
                    {
                        name: '少林心法',
                        type: 'mind',
                        describe: '少林虽然不是很重视内功，但基础内功心法也是十分著名的',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 10,
                        proficiency: 0
                    }
                ],
                '般若堂弟子':[
                    {
                        name: '般若掌',
                        type: 'force',
                        describe: '般若堂中，集天下掌法为一体的传世掌法',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 100,
                        proficiency: 0
                    },
                    {
                        name: '修罗刀法',
                        type: 'force',
                        describe: '隐忍，隐忍',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 100,
                        proficiency: 0
                    },
                    {
                        name: '鹰爪功',
                        type: 'force',
                        describe: '以指为爪，练到极致可以开碑裂石',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 100,
                        proficiency: 0
                    }
                ],
                '达摩院执事':[
                    {
                        name: '拈花指',
                        type: 'force',
                        describe: '轻若拈花',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 500,
                        proficiency: 0
                    },
                    {
                        name: '韦陀棍法',
                        type: 'force',
                        describe: '我编不下去了……',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 500,
                        proficiency: 0
                    },
                    {
                        name: '如来千叶手',
                        type: 'force',
                        describe: '我编不下去了……',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 500,
                        proficiency: 0
                    }
                ],
                '戒律院首座':[
                    {
                        name: '燃木刀法',
                        type: 'force',
                        describe: '我编不下去了……',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 1000,
                        proficiency: 0
                    },
                    {
                        name: '伏魔杖法',
                        type: 'force',
                        describe: '我编不下去了……',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 1000,
                        proficiency: 0
                    },
                    {
                        name: '少林九阳功',
                        type: 'mind',
                        describe: '我编不下去了……',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 900,
                        proficiency: 0
                    },
                    {
                        name: '寂灭爪',
                        type: 'force',
                        describe: '我编不下去了……',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 1000,
                        proficiency: 0
                    }
                ],
                '少林寺方丈':[
                    {
                        name: '金刚伏魔圈',
                        type: 'force',
                        describe: '我编不下去了……',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 2000,
                        proficiency: 0
                    },
                    {
                        name: '大力金刚指',
                        type: 'force',
                        describe: '我编不下去了……',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 1000,
                        proficiency: 0
                    },
                    {
                        name: '易筋经',
                        type: 'mind',
                        describe: '我编不下去了……',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 900,
                        proficiency: 0
                    }
                ]

            },
            work: {
                '沙弥': [
                    {
                        name: '挑水',
                        probability: 0.4,
                        print: '你认真的挑了一个月的水，感觉自己更健壮了。',
                        effect: function(){
                            jianghu.calc({body: 1,time: 1})
                        }
                    },
                    {
                        name: '打柴',
                        probability: 0.8,
                        print: '你认真的打了一个月的柴（哪有那么多柴……），感觉自己更健壮了。',
                        effect: function(){
                            jianghu.calc({body: 1,time: 1})
                        }
                    },
                    {
                        name: '打扫藏经阁',
                        probability: 1,
                        print: '你认真的打扫藏经阁，无意当中读了不少佛经。',
                        effect: function(){
                            jianghu.calc({mind: 1,time: 1,kongfu:{name:'少林佛法',num:2}})
                        }
                    }
                ],
                '罗汉堂弟子': [
                    {
                        name: '打熬身体',
                        probability: 0.4,
                        print: '你认真训练，感觉自己的身体又上了一个新台阶。',
                        effect: function(){
                            jianghu.calc({body: 1,time: 1})
                        }
                    },
                    {
                        name: '切磋武艺',
                        probability: 0.8,
                        print: '你和师兄弟们切磋武艺。',
                        effect: function(){
                            jianghu.calc({force: 2,time: 1})
                        }
                    },
                    {
                        name: '研习佛法',
                        probability: 1,
                        print: '你认真的听讲佛法，感觉自己佛法精进了不少。',
                        effect: function(){
                            jianghu.calc({mind: 1,time: 1,kongfu:{name:'少林佛法',num:2}})
                        }
                    }
                ]
            }
        }
    ]
};
