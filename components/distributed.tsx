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
              <HoverCard.Content>
                <Box>
                  <Link
                    href="https://www.youtube.com/watch?v=cQP8WApzIQQ&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&index=1"
                    target="_blank"
                  >
                    Video
                  </Link>
                  <Link href="https://twitter.com/radix_ui" target="_blank">
                    Note
                  </Link>
                </Box>
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
                  Lab1: MapReduce
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
          <Table.Cell>RPC and Threads</Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                Online Go Toturial
              </Button>
              <Button size="1" variant="outline">
                kv.go
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>3</Table.RowHeaderCell>
          <Table.Cell>GFS</Table.Cell>
          <Table.Cell>
            <Flex gap="3">
            <Button size="1" variant="outline">
                <Link
                  href="https://pdos.csail.mit.edu/6.824/labs/lab-raft.html"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  Lab2: Raft
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
          <Table.Cell>Primary-Backup Replication</Table.Cell>
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
          <Table.Cell>Go, Threads, and Raft</Table.Cell>
          <Table.Cell>
            <Flex gap="3">
              <Button size="1" variant="outline">
                The Go Memory Model
              </Button>
            </Flex>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>6</Table.RowHeaderCell>
          <Table.Cell>Fault Tolerance: Raft (1)</Table.Cell>
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
          <Table.Cell>Fault Tolerance: Raft (2)</Table.Cell>
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
          <Table.Cell>Zookeeper</Table.Cell>
          <Table.Cell>Resources_8</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>9</Table.RowHeaderCell>
          <Table.Cell>More Replication, CRAQ</Table.Cell>
          <Table.Cell>Resources_9</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>10</Table.RowHeaderCell>
          <Table.Cell>Cloud Replicated DB, Aurora</Table.Cell>
          <Table.Cell>Resources_10</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>11</Table.RowHeaderCell>
          <Table.Cell>Cache Consistency: Frangipani</Table.Cell>
          <Table.Cell>Resources_11</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>12</Table.RowHeaderCell>
          <Table.Cell>Distributed Transactions</Table.Cell>
          <Table.Cell>Resources_12</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>13</Table.RowHeaderCell>
          <Table.Cell>Spanner</Table.Cell>
          <Table.Cell>Resources_13</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>14</Table.RowHeaderCell>
          <Table.Cell>Optimistic Concurrency Control</Table.Cell>
          <Table.Cell>Resources_14</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>15</Table.RowHeaderCell>
          <Table.Cell>Big Data: Spark</Table.Cell>
          <Table.Cell>Resources_15</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>16</Table.RowHeaderCell>
          <Table.Cell>Cache Consistency: Memcached at Facebook</Table.Cell>
          <Table.Cell>Resources_16</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>17</Table.RowHeaderCell>
          <Table.Cell>Causal Consistency, COPS</Table.Cell>
          <Table.Cell>Resources_17</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>18</Table.RowHeaderCell>
          <Table.Cell>Fork Consistency, Certificate Transparency</Table.Cell>
          <Table.Cell>Resources_18</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>19</Table.RowHeaderCell>
          <Table.Cell>Bitcoin</Table.Cell>
          <Table.Cell>Resources_19</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>20</Table.RowHeaderCell>
          <Table.Cell>Blockstack</Table.Cell>
          <Table.Cell>Resources_20</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>21</Table.RowHeaderCell>
          <Table.Cell>AnalogicFS experience paper</Table.Cell>
          <Table.Cell>Resources_21</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default Distributed;
