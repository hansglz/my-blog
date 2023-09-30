import { Table, Text, HoverCard, Box, Link } from "@radix-ui/themes";

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
          <Table.Cell>Resources_1</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>2</Table.RowHeaderCell>
          <Table.Cell>RPC and Threads</Table.Cell>
          <Table.Cell>Resources_2</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>3</Table.RowHeaderCell>
          <Table.Cell>GFS</Table.Cell>
          <Table.Cell>Resources_3</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>4</Table.RowHeaderCell>
          <Table.Cell>Primary-Backup Replication</Table.Cell>
          <Table.Cell>Resources_4</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>5</Table.RowHeaderCell>
          <Table.Cell>Go, Threads, and Raft</Table.Cell>
          <Table.Cell>Resources_5</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>6</Table.RowHeaderCell>
          <Table.Cell>Fault Tolerance: Raft (1)</Table.Cell>
          <Table.Cell>Resources_6</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>7</Table.RowHeaderCell>
          <Table.Cell>Fault Tolerance: Raft (2)</Table.Cell>
          <Table.Cell>Resources_7</Table.Cell>
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
