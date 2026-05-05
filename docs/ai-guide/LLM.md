# 大语言模型



大语言模型不是一夜之间出现的，而是NLP（自然语言处理，Natural Language Processing）技术演进的结果，Ai 发展的历史可以参考[AI 简史](https://datawhalechina.github.io/easy-vibe/zh-cn/appendix/8-artificial-intelligence/ai-history.html)。



一方面，2017年Google 发布的论文《Attention is All You Need》引入了 Transformer 架构。这相当于给 AI 装上了“注意力机制”。它能同时处理一整段文字，理解单词之间的远距离关联。这是大模型真正的出生证明。另一方面得益于算力的提升，虽然 GPU 不是专门为 AI 设计的，但它的超大规模、可并行的线性代数计算能力，让 AI 的训练和推理速度大幅提升。


## 什么是大语言模型

大语言模型（Large Language Model，LLM）是一个基于海量数据训练的、拥有巨量参数的深度学习网络。单从名字上理解，它下面几个特点：
- **大**：指参数规模。通常拥有百亿甚至千亿级参数（你可以理解为大脑中的神经元连接）。
- **语言**：它的核心输入和输出是人类语言，但也包括代码、数学公式等逻辑语言。
- **模型**：它的本质是数学函数。你给它一个输入$x$，它通过复杂的运算给你一个输出 $y$。









## 它是如何工作的
