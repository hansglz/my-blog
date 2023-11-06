import {
  Table,
  Text,
  HoverCard,
  Box,
  Link,
  Flex,
  Button,
} from "@radix-ui/themes";

const Distributed = () => {
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
                <Text>Introduction</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=cQP8WApzIQQ&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=1"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
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
                  href="https://pdos.csail.mit.edu/6.824/labs/lab-mr.html"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Lab 1: MapReduce
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  MapReduce(2004)
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
                <Text>RPC and Threads</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=gA4YXUJX7t8&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=2&t=2s&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
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
                  href="http://tour.golang.org/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Online Go Toturial
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://pdos.csail.mit.edu/6.824/notes/kv.go"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  kv.go
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
                <Text>GFS</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=EpIgvowZr00&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=3&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
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
                  href="https://pdos.csail.mit.edu/6.824/labs/lab-raft.html"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Lab 2: Raft
                </Link>
              </Button>
              <Button size="1" variant="outline">
                <Link
                  href="https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  GFS(2003)
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
                <Text>Primary-Backup Replication</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=M_teob23ZzY&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=4"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
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
                  href="https://www.cs.princeton.edu/courses/archive/fall16/cos418/papers/scales-vm.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Fault-Tolerant Virtual Machines(2010)
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
                <Text>Go, Threads, and Raft</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=UzzcUS2OHqo&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=5&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
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
                  href="https://golang.org/ref/mem"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  The Go Memory Model
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
                <Text>Fault Tolerance: Raft (1)</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=64Zp3tzNbpE&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=6&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
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
                  href="https://raft.github.io/raft.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Raft(2014)
                </Link>
              </Button>
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://raft.github.io/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  The Raft Consensus Algorithm
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
                <Text>Fault Tolerance: Raft (2)</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=4r8Mz3MMivY&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=7&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://lamport.azurewebsites.net/pubs/lamport-paxos.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Optional: Paxos(2014)
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
                <Text>Zookeeper</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=pbmyrNjzdDk&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=8&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/papers/zookeeper.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  ZooKeeper(2010)
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
                <Text>More Replication, CRAQ</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=IXHzbCuADt0&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=9&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/labs/lab-kvraft.html"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Lab 3: KV Raft
                </Link>
              </Button>

              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/papers/craq.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  CRAQ(2009)
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
                <Text>Cloud Replicated DB, Aurora</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=jJSh54J1s5o&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=10&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/papers/aurora.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Aurora(2017)
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
                <Text>Cache Consistency: Frangipani</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=-pKNCjUhPjQ&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=11&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/papers/thekkath-frangipani.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Frangipani(1997)
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
                <Text>Distributed Transactions</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=aDp99WDIM_4&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=12&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="1">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/labs/lab-shard.html"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Lab 4: Sharded KV
                </Link>
              </Button>

              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/project.html"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Project proposals
                </Link>
              </Button>

              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://ocw.mit.edu/resources/res-6-004-principles-of-computer-system-design-an-introduction-spring-2009/online-textbook/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  6.033 Chapter 9
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
                <Text>Spanner</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=4eW5SWBi7vs&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=13&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/papers/spanner.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Spanner(2012)
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
                <Text>Optimistic Concurrency Control</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=Cw6Nj2evjSs&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=14&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/papers/farm-2015.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  FaRM(2015)
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
                <Text>Big Data: Spark</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=mzIoSW-cInA&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=15&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/papers/zaharia-spark.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Spark(2012)
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
                <Text>Cache Consistency: Memcached at Facebook</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=Myp8z0ybdzM&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=16&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/papers/memcache-fb.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Memcached at Facebook(2013)
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
                <Text>Causal Consistency, COPS</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=fR_NB714EAI&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=17&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/papers/cops.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  COPS(2011)
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
                <Text>Fork Consistency, Certificate Transparency</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=UKdLJ7-0iFM&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=18&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="2">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://www.certificate-transparency.org/what-is-ct"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Certificate Transparency
                </Link>
              </Button>
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://www.certificate-transparency.org/how-ct-works"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  How CT works
                </Link>
              </Button>
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://research.swtch.com/tlog"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  tlog
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>19</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Bitcoin</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=K_euhRou98Y&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=19&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/papers/bitcoin.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Bitcoin(2008)
                </Link>
              </Button>
              <Button size="1" variant="outline" asChild>
                <Link
                  href="http://www.michaelnielsen.org/ddi/how-the-bitcoin-protocol-actually-works"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  How the Bitcoin protocol works
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>20</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>Blockstack</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=XvXK_vZ0BNw&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=20&pp=iAQB"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/papers/blockstack-2017.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  BlockStack(2017)
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>21</Table.RowHeaderCell>
          <Table.Cell>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Text>AnalogicFS experience paper</Text>
              </HoverCard.Trigger>
              <HoverCard.Content side="right" align="center" size="1">
                <Flex gap="2">
                  <Box>
                    <Link
                      href="https://www.youtube.com/watch?v=cQP8WApzIQQ&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=21"
                      target="_blank"
                      size="2"
                    >
                      Video
                    </Link>
                  </Box>
                  <Box>
                    <Link href="https://twitter.com/radix_ui" target="_blank" size="2">
                      Note
                    </Link>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline" asChild>
                <Link
                  href="https://pdos.csail.mit.edu/6.824/papers/katabi-analogicfs.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  AnalogicFS paper
                </Link>
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

      </Table.Body>
    </Table.Root>
  );
};

export default Distributed;
