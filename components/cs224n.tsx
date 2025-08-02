import {
  Table,
  Text,
  HoverCard,
  Box,
  Link,
  Flex,
  Button,
} from "@radix-ui/themes";

const NOTES_DIR = '/notes/cs224n/lecture';

const CS224n = () => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>#</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="font-bold">
            Resources
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>1</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Introduction and Word Vectors</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=rmVRLeJRkl4&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=1"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}1.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture01-wordvecs1.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/~jurafsky/slp3/6.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Reading: Vector Semantics
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>2</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Word Vectors and Word Senses</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=kEMJRjEdNzM&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=2"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}2.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture02-wordvecs2.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Word2Vec Paper
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>3</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Neural Networks</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=8CWyBNX6eDo&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=3"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}3.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture03-neuralnets.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/~jurafsky/slp3/7.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Reading: Neural Networks
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>4</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Dependency Parsing</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=PSGIodTN3KE&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=4"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}4.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture04-dep-parsing.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/~jurafsky/slp3/18.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Reading: Dependency Parsing
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>5</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Recurrent Neural Networks</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=PLryWeHPcBs&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=5"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}5.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture05-rnnlm.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/~jurafsky/slp3/9.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Reading: RNNs
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>6</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>LSTM and GRU</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=0LixFSa7yts&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=6"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}6.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture06-fancy-rnn.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://arxiv.org/pdf/1412.3555.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  GRU Paper
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>7</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Machine Translation and Attention</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=wzfWHP6SXxY&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=7"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}7.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture07-final-project.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://arxiv.org/pdf/1409.0473.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Attention Paper
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>8</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Transformers</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=ptuGllU5SQQ&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=8"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}8.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture08-transformers.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://arxiv.org/pdf/1706.03762.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Attention Is All You Need
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>9</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Pretraining and BERT</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=knTc-NQSjKA&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=9"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}9.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture09-pretraining-updated.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://arxiv.org/pdf/1810.04805.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  BERT Paper
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>10</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Question Answering</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=yIdF-17HwSk&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=10"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}10.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture10-prompting-rlhf.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://arxiv.org/pdf/1606.05250.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  SQuAD Paper
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>11</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Natural Language Generation</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=4uG1NMKNWCU&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=11"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}11.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture11-evaluation-yann.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/~jurafsky/slp3/10.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Reading: Text Generation
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>12</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Coreference Resolution</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=i19m4GzBhfc&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=12"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}12.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture12-training-shikhar.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/~jurafsky/slp3/22.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Reading: Coreference
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>13</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>T5 and Large Language Models</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=8zAP2qWAsKg&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=13"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}13.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture13-speech-bci.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://arxiv.org/pdf/1910.10683.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  T5 Paper
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>14</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Multimodal Deep Learning</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=vAjUzMl8LkQ&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=14"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}14.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture14-agents-shikhar.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://arxiv.org/pdf/1707.07998.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Multimodal Learning
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>15</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Tree Recursive Neural Networks</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=trIpsSUm-Dk&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=15"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}15.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture15-life-after-dpo-lambert.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://nlp.stanford.edu/~socherr/EMNLP2013_RNTN.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Tree RNN Paper
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>16</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Safety and AI Alignment</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=Mp1xpFNGeXY&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=16"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}16.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture16-CNN-TreeRNN.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://arxiv.org/pdf/2203.02155.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  RLHF Paper
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>17</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Model Analysis and Explanation</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=f_qmSSBWV_E&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=17"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}17.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-2024-lecture17-human-centered-nlp.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://arxiv.org/pdf/1702.01923.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Analysis Methods
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>18</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Future of NLP</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=EniDTYMWdcQ&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4&index=18"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`${NOTES_DIR}18.txt`} target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-2024-lecture18-deployment-and-efficiency.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Slides
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://web.stanford.edu/class/cs224n/slides/cs224n-2024-lecture19-open-problems.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Open Problems
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

      </Table.Body>
    </Table.Root>
  );
};

export default CS224n;